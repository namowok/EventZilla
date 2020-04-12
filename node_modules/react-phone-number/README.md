# React Phone Number

A React component for rendering a phone number.


## Usage

`npm install --save react-phone-number`

And then:

```javascript
import PhoneNumber from 'react-phone-number';
```

```html
<PhoneNumber number="+61412345678" />
<PhoneNumber number={user.phone} />
```

You can also have the a `tel:` link automatically added:

```html
<PhoneNumber number={user.phone} isLinked={true} />
```


## Testing

Install Babel CLI (`npm install -g babel-cli`) then then:

`npm test`