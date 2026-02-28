import React from 'react';
import { Link } from 'react-router';
import Button from '../button/Button';

const EmptyState = () => {
    return (
        <div className='py-12 text-center'>
            <h1 className='text-4xl'>No Data Found</h1>

            <Link to='/'>
            <Button label='Browse Product'></Button>
            </Link>
        </div>
    );
};

export default EmptyState;