import { Meta, StoryObj } from '@storybook/react'
import CommonRichContent from './CommonRichContent'

const meta: Meta = {
  title: 'Common/RichContent'
}

type Story = StoryObj<typeof CommonRichContent>

export const Demo: Story = {
  render: () => (
    <CommonRichContent
      html={`<p><a href="https://masto.ai/tags/Earthquake" class="mention hashtag" rel="nofollow noopener noreferrer" target="_blank">#<span>Earthquake</span></a> (<a href="https://masto.ai/tags/cutremur" class="mention hashtag" rel="nofollow noopener noreferrer" target="_blank">#<span>cutremur</span></a>) possibly felt 29 sec ago in <a href="https://masto.ai/tags/Romania" class="mention hashtag" rel="nofollow noopener noreferrer" target="_blank">#<span>Romania</span></a>. Felt it? Tell us via:<br>📱<a href="https://www.emsc-csem.org/service/application/" rel="nofollow noopener noreferrer" target="_blank"><span class="invisible">https://www.</span><span class="ellipsis">emsc-csem.org/service/applicat</span><span class="invisible">ion/</span></a><br>🌐<a href="https://m.emsc.eu" rel="nofollow noopener noreferrer" target="_blank"><span class="invisible">https://</span><span class="">m.emsc.eu</span><span class="invisible"></span></a><br>🖥<a href="https://www.emsc-csem.org" rel="nofollow noopener noreferrer" target="_blank"><span class="invisible">https://www.</span><span class="">emsc-csem.org</span><span class="invisible"></span></a><br>⚠ Automatic crowdsourced detection, not seismically verified yet. More info soon!</p>`}
    />
  )
}

export default meta
