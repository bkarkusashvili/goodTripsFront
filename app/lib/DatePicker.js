import React from 'react';
import { Platform, DatePickerIOS, DatePickerAndroid } from 'react-native';

const month = {
    ka: ['იანვარი', 'თებერვალი', 'მარტი', 'აპრილი', 'მაისი', 'ივნისი', 'ივლისი', 'აგვისტო', 'სექტემბერი', 'ოქტომბერი', 'ნოემბერი', 'დეკემბერი']

};

export const DatePicker = ({show, onSelect, setShow}) => {

    if(Platform.OS === 'android' && show) {
        DatePickerAndroid.open().then(e => {
            setShow(false);
            e.action === 'dateSetAction' ? onSelect(e.day + ' ' + month.ka[e.month]) : null;
        });
    }

    const updateDate = (date) => {
        setShow(false);
        onSelect(new Date(date).getDate());
        console.log(date);
    };

    return (
        <>
        {show && Platform.OS === 'ios' && (
            <DatePickerIOS
              date={new Date()}
              mode='date'
              onDateChange={updateDate}
            />
        )}
        </>
    );
};
