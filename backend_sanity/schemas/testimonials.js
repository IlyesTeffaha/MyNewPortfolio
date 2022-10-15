export default {
    name: 'testimonials',
    title: 'Testimonials',
    type:'document',
    fields:[
{
    name:'name',
    title:'Name',
    type:'string'
},
{
    name:'company',
    title:'Company',
    type:'string'
},
{
    name:'imageurl',
    title:'imgURL',
    type:'image',
    options:{

        // Enables the user interface for selecting what areas of an image should always be cropped, what areas should never be cropped, and the center of the area to crop around when resizing. The hotspot data is stored in the image field itself, not in the image asset, so images can have different crops for each place they are used.Hotspot makes it possible to responsively adapt images to different aspect ratios at display time. The default value for hotspot is false.
        hotspot:true,
    }
},
{
    name:'feedback',
    title:'Feedback',
    type:'string'
},

    ]
}