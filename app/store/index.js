import React, { useState } from 'react';

export const FontStatus = React.createContext(false);

export default () => [fontsLoaded, setFontStatus] = useState(false);
