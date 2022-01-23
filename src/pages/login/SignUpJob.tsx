import { LoginButton } from '../../components';
import { useState } from 'react';
import { Dropdown } from 'semantic-ui-react'

const SignUpJob = () => {

    const jobOptions = [
        { key: '백엔드', value: '백엔드', text: '백엔드' },
        { key: '프론트엔드', value: '프론트엔드', text: '프론트엔드' },
        { key: '풀스택', value: '풀스택', text: '풀스택' },
        { key: '보안', value: '보안', text: '보안' },
        { key: '빅데이터', value: '빅데이터', text: '빅데이터' },
        { key: '안드로이드', value: '안드로이드', text: '안드로이드' },
    ]
    
    return (
        <>
            <p>EliceFolio</p>
            <form style={{ position: "relative" }}>
                <p>직군을 선택해주세요.</p>
                <Dropdown placeholder='직군' fluid search selection options={jobOptions} />
                <LoginButton type='submit' text='다음으로' className='gray_button' />
            </form>
        </>
    );
};

export default SignUpJob;