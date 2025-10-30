---
title: TargetSearchMode
---

```csharp
[Flags]
public enum TargetSearchMode
```

## Fields

- **Alive**: 1 - Includes alive players in the search results.


- **Dead**: 2 - Includes dead players in the search results.


- **IncludeSelf**: 8 - Includes the searching player in the search results.


- **NoBots**: 64 - Excludes bot players from the search results.


- **NoMultipleTargets**: 4 - Limits the search to a single target only.


- **None**: 0 - No specific search mode; default behavior.


- **OppositeTeamOnly**: 32 - Includes only players from the opposite team in the search results.


- **TeamOnly**: 16 - Includes only players from the same team in the search results.



