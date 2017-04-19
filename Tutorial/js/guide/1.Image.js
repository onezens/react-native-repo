
//static resource
<Image source={require('../1.jpg')} />

var icon = this.props.active ? require('../1.jpg') : require('../2.jpg')
<Image source={icon} />

//Image from Hybrid app`s resource

<Image source={{uri: 'app_icon'}} style={{width:800, height:600}} />

//network image
<Image source={{uri: 'https://baidu.com/img/1.jpf'}} style={{width:800, height:600}} />

//cache control
// default: Use the native platforms default strategy.

// reload: The data for the URL will be loaded from the originating source. No existing cache data should be used to satisfy a URL load request.

// force-cache: The existing cached data will be used to satisfy the request, regardless of its age or expiration date. If there is no existing data in the cache corresponding the request, the data is loaded from the originating source.

// only-if-cached: The existing cache data will be used to satisfy a request, regardless of its age or expiration date. If there is no existing data in the cache corresponding to a URL load request, no attempt is made to load the data from the originating source, and the load is considered to have failed.

<Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png', cache: 'only-if-cached'}}  style={{width: 400, height: 400}} />
