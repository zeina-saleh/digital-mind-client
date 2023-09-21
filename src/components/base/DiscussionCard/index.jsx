import React from 'react'

const DiscussionCard = ({ discussion }) => {

    const print = () => {
        console.log("clicked")
    }

    return (
            <div className='flex flex-col w-2/5 h-52'>
                <div className='card flex items-center justify-center w-full h-full p-0' style={discussion.idea.path !== 'storage/screenshots/logo.svg' ? { backgroundColor: '#fff' } : {}}>
                    <img className='card-img' src={`http://localhost:8000/${discussion.idea.path}`} style={discussion.idea.path !== 'storage/screenshots/logo.svg' ? { width: '100%', height: '100%', objectFit: 'cover' } : {}}></img>
                </div>
                <div className='flex flex-col w-full p-2'>
                    {/* <p className='font-semibold text-lg'>{idea.collection.user.name}</p> */}
                    <div className='flex justify-between items-center w-full'>
                        <p className='font-semibold' >{discussion.title}</p>
                        <div className='flex items-center gap-2'>
                            {/* <p>{idea.likes_count}</p> */}
                            {/* <FontAwesomeIcon icon={idea.liked ? fasHeart : faHeart} style={{ color: "#1ED690", }} className='w-5 h-5 cursor-pointer' onClick={likeIdea} /> */}
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default DiscussionCard