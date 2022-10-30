import React, { useState } from 'react'
import { Box, Checkbox, FormControlLabel, FormControl, FormLabel, FormGroup, FormHelperText } from '@mui/material'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const MuiCheckbox = () => {
  const [acceptInc, setAcceptInc] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptInc(event.target.checked);
  }

  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(event.target.value)
    if (index === -1) {
      setSkills([...skills, event.target.value])
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value))
    }
    
  }

  return (
    /***
     * Box component create block display, with specific width if any
     * Use <FormControl /> component to control form
     * Use <FormControlLabel /> component to create checkbox with label
     * <FormHelperText /> component is the same as 'helperText' prop
     */
    <Box>
      {/* Checkbox with label */}
      <Box>
        <FormControlLabel
          label='I accept terms and conditions'
          control={
            <Checkbox
              size='small'
              color='secondary'
              value={acceptInc}
              onChange={handleChange}
            />
          }
        />
      </Box>

      {/* Checkbox with icon */}
      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          value={acceptInc}
          onChange={handleChange}
        />
      </Box>

      {/* Checkbox group */}
      <Box>
        <FormControl>
          <FormLabel error>Skills</FormLabel>
          <FormGroup>
            <FormControlLabel
              label='HTML'
              value='html'
              control={<Checkbox checked={skills.includes('html')} onChange={handleSkillChange} />}
            />
            <FormControlLabel
              label='CSS'
              value='css'
              control={<Checkbox checked={skills.includes('css')} onChange={handleSkillChange} />}
            />
            <FormControlLabel
              label='Javascript'
              value='javascript'
              control={<Checkbox checked={skills.includes('javascript')} onChange={handleSkillChange} />}
            />
          </FormGroup>
          <FormHelperText>Invalid Selection</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  )
}

export default MuiCheckbox