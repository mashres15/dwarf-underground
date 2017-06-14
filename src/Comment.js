import React, { Component } from 'react'
import Images from './Images'
import './Comment.css'

    class Comment extends Component {
        constructor() {
            super()
            this.state = {
                comments: [],
            }
        }

        handleSubmit(ev) {
            ev.preventDefault()
            const comments = [...this.state.comments]
            comments.push(this.commentNameField.value)
            this.setState({ comments })
            ev.currentTarget.reset()
        }
        revealComment(ev){
            this.commentDiv.classList.toggle('hide')
        }

        renderComment(comment, i) {
            return <li key={i} className="comment-li">{comment}</li>
        }
        render() {
            return (
                <div>
                <div className="article-links">
                <a className="article-link" onClick={this.revealComment.bind(this)}>
                <i className="fa fa-comments-o"></i>
                <span className="article-link-text">Comments</span>
                </a>
                <a className="article-link" href="#">
                <i className="fa fa-share"></i>
                <span className="article-link-text">Share Post</span>
                </a>
                </div>
                
                
                <div className="comment hide" ref={(div) => this.commentDiv = div}>
                <div className="medium-12 column">
                <form onSubmit={this.handleSubmit.bind(this)}>
                <input className="form-input" type="text" placeholder="Enter comment" ref={(input) => this.commentNameField = input} />
                    <button id="post-button" type="submit" className="expanded success button">Post</button>
                        </form>
                    Comments
                    <div className="medium-12 column">
                            <ul className="no-bullet">
                                {this.state.comments.map(this.renderComment)}
                                </ul>
                                </div>
                            </div>
                        </div>
                        </div>

                        
                            )
}
}

export default Comment