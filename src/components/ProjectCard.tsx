
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Eye } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface Project {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
  category: string;
  fullDescription: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card className="group bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 overflow-hidden h-full">
        <div className="relative overflow-hidden">
          <img 
            src={project.thumbnail} 
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button size="sm" className="bg-cyan-500 hover:bg-cyan-600 text-white">
                  <Eye className="w-4 h-4 mr-2" />
                  View Details
                </Button>
              </DialogTrigger>
            </Dialog>
          </div>
        </div>
        
        <CardHeader>
          <CardTitle className="text-white group-hover:text-cyan-400 transition-colors duration-300 text-lg">
            {project.title}
          </CardTitle>
          <CardDescription className="text-slate-300 text-sm">
            {project.description}
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <Badge 
                key={tag} 
                variant="secondary" 
                className="bg-slate-700/50 text-slate-300 border-slate-600 hover:bg-slate-600 transition-colors duration-300 text-xs"
              >
                {tag}
              </Badge>
            ))}
          </div>
          
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-700 text-xs"
            >
              <Github className="w-3 h-3 mr-1" />
              Code
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-700 text-xs"
            >
              <ExternalLink className="w-3 h-3 mr-1" />
              Demo
            </Button>
          </div>
        </CardContent>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-slate-800 border-slate-700 text-white max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl text-cyan-400">{project.title}</DialogTitle>
            <DialogDescription className="text-slate-300 text-base">
              {project.fullDescription}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <img 
              src={project.thumbnail} 
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge 
                  key={tag} 
                  variant="secondary" 
                  className="bg-slate-700/50 text-slate-300 border-slate-600"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            
            <div className="flex gap-3 pt-4">
              <Button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
                <Github className="w-4 h-4 mr-2" />
                View Source Code
              </Button>
              <Button variant="outline" className="flex-1 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectCard;
