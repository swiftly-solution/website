---
title: CPulseCell_WaitForCursorsWithTag
---

```csharp
public interface CPulseCell_WaitForCursorsWithTag : CPulseCell_WaitForCursorsWithTagBase, CPulseCell_BaseYieldingInflow, CPulseCell_BaseFlow, CPulseCell_Base, ISchemaClass<CPulseCell_Base>, ISchemaClass<CPulseCell_BaseFlow>, ISchemaClass<CPulseCell_BaseYieldingInflow>, ISchemaClass<CPulseCell_WaitForCursorsWithTagBase>, ISchemaClass<CPulseCell_WaitForCursorsWithTag>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### DesiredKillPriority

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_WaitForCursorsWithTag.cs#L19)

```csharp
ref PulseCursorCancelPriority_t DesiredKillPriority { get; }
```

#### Property Value

- [PulseCursorCancelPriority_t](/docs/api/shared/schemadefinitions/pulsecursorcancelpriority_t)

### TagSelfWhenComplete

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_WaitForCursorsWithTag.cs#L17)

```csharp
ref bool TagSelfWhenComplete { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

