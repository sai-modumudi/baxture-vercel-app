import { Avatar, Text, Group, Stack, Paper, Button, Anchor, Tooltip } from "@mantine/core";
import { IconPhoneCall, IconAt, IconWorld, IconTrash, IconUserCheck, IconUserMinus, IconStar, IconUserPlus } from '@tabler/icons-react';
import styles from './user-profile-card.module.css'
import { useState } from "react";

interface UserProfileCardProps {
    user: {
        id: number,
        name: string,
        email: string,
        phone: string,
        website: string
    },
    handleDelete: (id: number) => void
}

export default function UserProfileCard({ user: { id, name, email, phone, website }, handleDelete }: UserProfileCardProps) {

    //State to keep track of follow/unfollow
    const [follow, setFollow] = useState(false);

    const iconTrash = <IconTrash color="#228BE6" stroke={2} size="1rem" className={styles.icon} />;
    const iconUserPlus = <IconUserPlus color="#FFFFFF" stroke={2} size="1rem" className={styles.icon} />;
    const iconUserMinus = <IconUserMinus color="#242424" stroke={2} size="1rem" className={styles.icon} />;


    const handleFollow = () => {
        setFollow(!follow)
    }

    return (
        <Paper radius="md" shadow="md" withBorder className={styles.card}>
            <Stack gap={0}>
                <Tooltip label={name} withArrow>
                    <Avatar
                        src={`https://api.dicebear.com/7.x/initials/svg?seed=${name}`}
                        size={120}
                        radius={120}
                        mx="auto"

                    />
                </Tooltip>

                <Text fz="lg" fw={500}  className={styles.name} mt={16}>
                    {follow ? (<>{name}<IconStar size={16} /></>) : name}
                </Text>
                <div>
                    <Group wrap="nowrap" gap={5} mt={5}>
                        <IconAt color="grey" stroke={1.5} size="1rem" className={styles.icon} />
                        <Anchor fz="md" c="dimmed" href={`mailto:${email}`} target="_blank">
                            {email}
                        </Anchor>
                    </Group>

                    <Group wrap="nowrap" gap={5} mt={5}>
                        <IconPhoneCall color="grey" stroke={1.5} size="1rem" className={styles.icon} />
                        <Anchor fz="mg" c="dimmed" href={`tel:${phone}`} target="_blank">
                            {phone}
                        </Anchor>
                    </Group>
                    <Group wrap="nowrap" gap={5} mt={5}>
                        <IconWorld color="grey" stroke={1.5} size="1rem" className={styles.icon} />
                        <Anchor fz="md" c="dimmed" href={`https://${website}`} target="_blank">
                            {website}
                        </Anchor>
                    </Group>
                </div>
                <Group wrap="nowrap" grow justify="space-between" gap={5} mt={15}>

                    <Button fw={500} onClick={handleFollow} leftSection={!follow ? iconUserPlus : iconUserMinus} variant={`${!follow ? 'filled' : 'default'}`}>
                        {
                            !follow ? 'Follow' : 'Unfollow'
                        }
                    </Button>
                    <Button fw={500} justify="center" leftSection={iconTrash} variant="outline" onClick={() => handleDelete(id)}>
                        Delete
                    </Button>
                </Group>

            </Stack>
        </Paper>);
}