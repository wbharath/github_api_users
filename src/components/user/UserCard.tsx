import { Button } from '../ui/button'
import { Card, CardTitle, CardDescription, CardHeader } from '../ui/card'

type UserCardsProps = {
  avatarUrl: string
  name: string
  bio: string
  url: string
}

const UserCard = ({ avatarUrl, name, bio, url }: UserCardsProps) => {
  return (
    <Card className="w-full lg:w-1/2 mb-8">
      <CardHeader className="flex-row gap-x-8items-center">
        <img
          src={avatarUrl}
          alt={name}
          className="w-36 -36 rounded object-cover"
        />
        <div className="flex flex-col gap-y-2">
          <CardTitle>{name || 'NA'}</CardTitle>
          <CardDescription>
            {bio || 'Passionate about coding and Tech'}
          </CardDescription>
          <Button asChild size="sm" className="w-1/2 mt-2">
            <a href={url} target="_blank" rel="noreferrer">
              Follow
            </a>
          </Button>
        </div>
      </CardHeader>
    </Card>
  )
}

export default UserCard
