// react tut for the purposes of grokking om

var R = React.DOM,
    converter = new Showdown.converter();

var Comment = React.createClass({
    displayName: 'Comment',
    render: function() {
        return(R.div({className: 'comment'},
                    R.h2({className: 'commentAuthor'},
                        this.props.author),
                    converter.makeHtml(this.props.children.toString())));
    }});

var CommentList = React.createClass({
    displayName: 'CommentList',
    render: function() {
        var commentNodes = this.props.data.map(function (comment) {
            return(Comment({author: comment.author},
                           comment.text));
        });
        return(R.div({className: 'commentList'},
                     commentNodes));
    }});

var CommentForm = React.createClass({
    displayName: 'CommentForm',
    handleSubmit: function(e) {
        e.preventDefault();
        var author = this.refs.author.getDOMNode().value.trim(),
            text = this.refs.text.getDOMNode().value.trim();
        if (!text || !author) {
            return;
        }
        this.props.onCommentSubmit({author: author, text: text});
        this.refs.author.getDOMNode().value = '';
        this.refs.text.getDOMNode().value = '';
        return;
    },
    render: function() {
        return(R.form({className: 'commentForm', onSubmit: this.handleSubmit},
            R.input({type: 'text', placeholder: 'Your name', ref: 'author'}),
            R.input({type: 'text', placeholder: 'Say something...', ref: 'text'}),
            R.input({type: 'submit', value: 'post'})));
    }});

var CommentBox = React.createClass({
    displayName: 'CommentBox',
    loadCommentsFromServer: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    handleCommentSubmit: function(comment) {
        var comments = this.state.data,
            newComments = comments.concat([comment]);
        this.setState({data: newComments});
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            type: 'POST',
            data: comment,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    getInitialState: function() {
        return ({data: []});
    },
    componentDidMount: function() {
        this.loadCommentsFromServer();
        setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    },
    render: function() {
        return(R.div({className: 'commentBox'},
            R.h1(null, 'Comments'),
            CommentList({data: this.state.data}),
            CommentForm({onCommentSubmit: this.handleCommentSubmit})));
    }});

React.renderComponent(CommentBox({url: 'comments.json',
                                  pollInterval: 2000}),
        document.getElementById('content'));
