import type { NextPage } from 'next'
import NotFound from '@/components/NotFound'

export interface Props {
  statusCode?: number
}

const Error: NextPage<Props> = ({ statusCode }: Props) => <NotFound statusCode={statusCode} />

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
