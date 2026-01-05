'use client'

import { Card } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { CopyButton } from '../code'
import React from 'react'

const commandGroups = [
  {
    group: 'Init and Test',
    commands: [
      {
        name: 'jobx init',
        description: 'Initialize the project with default configuration',
      },
      {
        name: 'jobx test',
        description: 'Run tests on all configuration files',
      },
    ],
  },
  {
    group: 'Generate and Submit',
    commands: [
      {
        name: 'jobx mail generate',
        description: 'Generate job application emails using AI',
      },
      {
        name: 'jobx mail submit',
        description: 'Submit generated job application emails',
      },
    ],
  },
  {
    group: 'Reset',
    commands: [
      {
        name: 'jobx reset soft',
        description: 'Perform a soft reset (keep credentials)',
      },
      {
        name: 'jobx reset hard',
        description: 'Perform a hard reset (reset everything)',
      },
    ],
  },
  {
    group: 'Sheet Commands',
    commands: [
      {
        name: 'jobx sheet find',
        description: 'Find all job applications with pagination',
      },
      {
        name: 'jobx sheet find -i <id>',
        description: 'Find job application by specific ID',
      },
      {
        name: 'jobx sheet find -p <page> -l <limit>',
        description: 'Find jobs with custom page and limit',
      },
      {
        name: 'jobx sheet delete <id>',
        description: 'Delete job by submitted ID',
      },
      {
        name: 'jobx sheet update <id> <field> <value>',
        description: 'Update submitted job field/value',
      },
    ],
  },
  {
    group: 'Miscellaneous',
    commands: [
      { name: 'jobx --version', description: 'Output the version number' },
      { name: 'jobx --help', description: 'Display help for command' },
    ],
  },
]

const CommandsSection = () => {
  return (
    <section id="commands" className="py-20 px-4 max-w-7xl mx-auto relative">
      <div className="absolute inset-0 gradient-mesh opacity-30 pointer-events-none"></div>
      <div className="mb-12 relative z-10">
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-gradient">CLI Commands</span>
        </h2>
        <p className="text-lg text-muted-foreground">
          All available commands and their options for full job automation
          control
        </p>
      </div>

      <Card className="border-border/50 overflow-hidden card-hover-glow relative z-10 py-0">
        <Table className='bg-primary-foreground'>
          <TableBody >
            {commandGroups.map((group, gIdx) => (
              <React.Fragment key={gIdx}>
                {/* Group title row */}
                <TableRow className="bg-accent/10">
                  <TableCell
                    colSpan={4}
                    className="font-medium text-accent text-center text-lg py-2"
                  >
                    {group.group}
                  </TableCell>
                </TableRow>

                {/* Header row for the group */}
                <TableRow className="bg-accent/5">
                  <TableCell className="font-semibold text-center">#</TableCell>
                  <TableCell className="font-semibold w-[35%]">Command</TableCell>
                  <TableCell className="font-semibold">Action</TableCell>
                  <TableCell className="font-semibold">Description</TableCell>
                </TableRow>

                {/* Commands */}
                {group.commands.map((cmd, idx) => (
                  <TableRow key={idx} className="hover:bg-accent/5">
                    <TableCell className="text-center text-muted-foreground font-medium">
                      {idx + 1}
                    </TableCell>
                    <TableCell className="font-mono text-accent font-medium">
                      {cmd.name}
                    </TableCell>
                    <TableCell className="font-mono text-accent font-medium">
                      <CopyButton code={cmd.name} />
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {cmd.description}
                    </TableCell>
                  </TableRow>
                ))}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </Card>

      <div className="mt-12 relative z-10">
        <Card className="p-6 bg-card/50 border-border/50">
          <h3 className="text-2xl font-semibold mb-4">
            Sheet Find Command Options
          </h3>
          <p className="text-muted-foreground mb-6">
            The <code className="text-accent font-mono">jobx sheet find</code>{' '}
            command supports flexible pagination and search options:
          </p>

          <div className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="p-4 bg-background/50 border-border/50">
                <code className="text-accent font-mono text-sm">
                  -p, --page
                </code>
                <p className="text-sm text-muted-foreground mt-2">
                  Page number (default: 1)
                </p>
              </Card>
              <Card className="p-4 bg-background/50 border-border/50">
                <code className="text-accent font-mono text-sm">
                  -l, --limit
                </code>
                <p className="text-sm text-muted-foreground mt-2">
                  Records per page (default: 20)
                </p>
              </Card>
              <Card className="p-4 bg-background/50 border-border/50">
                <code className="text-accent font-mono text-sm">-i, --id</code>
                <p className="text-sm text-muted-foreground mt-2">
                  Find by specific ID
                </p>
              </Card>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-3">Examples:</h4>
              <div className="space-y-2 font-mono text-sm">
                <div className="p-3 bg-background/50 rounded border border-border/50">
                  <span className="text-accent">jobx sheet find</span>
                  <span className="text-muted-foreground ml-4">
                    # Find first 20 records
                  </span>
                </div>
                <div className="p-3 bg-background/50 rounded border border-border/50">
                  <span className="text-accent">jobx sheet find -p 2</span>
                  <span className="text-muted-foreground ml-4">
                    # Find page 2
                  </span>
                </div>
                <div className="p-3 bg-background/50 rounded border border-border/50">
                  <span className="text-accent">jobx sheet find -l 50</span>
                  <span className="text-muted-foreground ml-4">
                    # Find first 50 records
                  </span>
                </div>
                <div className="p-3 bg-background/50 rounded border border-border/50">
                  <span className="text-accent">
                    jobx sheet find -p 3 -l 10
                  </span>
                  <span className="text-muted-foreground ml-4">
                    # Page 3, 10 per page
                  </span>
                </div>
                <div className="p-3 bg-background/50 rounded border border-border/50">
                  <span className="text-accent">jobx sheet find -i abc123</span>
                  <span className="text-muted-foreground ml-4">
                    # Find by ID
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}

export default CommandsSection
