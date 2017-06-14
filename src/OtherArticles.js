import React, { Component } from 'react'
import './OtherArticles.css'
import Images from './Images'

    class OtherArticles extends Component {
        render() {
            return (
                <div className="small-12 columns other-articles">
                <h2>From around the Realm</h2>
                <Images text="Single Orcs in Indianapolis" alt="orc" url="https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif"/>

                <Images text="You won't believe what's under this mountain" alt="mountain" url="https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg"/>
                
                <Images text="Mine 20% more gold with One Weird Trick" alt="gold" url="http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg"/>
                
                <Images text="Surprise for Indiana Hobbits born before 1999" alt="hobbit" url="http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg"/>
                
                </div>
            )
        }
    }

export default OtherArticles