import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const profiles = [
    {
        name: 'Souvic Chakraborty',
        image: 'https://ph-avatars.imgix.net/4994535/original.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=36&h=36&fit=crop',
        link: '#',
        iconColor: '#21293C',
        iconPath: 'M4.55 10h1.18V7.625h2.54V10h1.18V4.363H8.27v2.29H5.73v-2.29H4.55z'
    },
    {
        name: 'Bishakh Ghosh',
        image: 'https://ph-avatars.imgix.net/3529140/original.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=36&h=36&fit=crop',
        link: '#',
        iconColor: '#16C79A',
        iconPath: 'M4.055 10h1.05V6.164h.079L6.629 10h.738l1.446-3.836h.078V10h1.05V4.363H8.59L7.035 8.488h-.07L5.406 4.363H4.055z'
    },
    {
        name: 'Sahil Sagwekar',
        image: 'https://ph-avatars.imgix.net/4335740/original.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=36&h=36&fit=crop',
        link: '#',
        iconColor: '#005EF6',
        iconPath: 'M6.94 4c1.655 0 3 1.181 3 2.82s-1.345 2.82-3 2.82a3.052 3.052 0 01-2.32-1.06v2.31H3.5V1.18h1.12v5.46A3.052 3.052 0 016.94 4z'
    },
];

const Profiles = () => {
    return (
        <div className="profiles-container">
            {profiles.map((profile, index) => (
                <Link href={profile.link} key={index}>
                    <a className="profile-card">
                        <div className="profile-image">
                            <Image
                                src={profile.image}
                                alt={profile.name}
                                width={36}
                                height={36}
                                className="rounded-full"
                            />
                        </div>
                        <div className="profile-info">
                            <span className="profile-name">{profile.name}</span>
                            <svg
                                viewBox="0 0 12 12"
                                width="12"
                                height="12"
                                fill={profile.iconColor}
                                className="profile-icon"
                            >
                                <path d={profile.iconPath} />
                            </svg>
                        </div>
                    </a>l                </Link>
            ))}
        </div>
    );
};

export default Profiles;
