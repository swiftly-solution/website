---
title: CPulseCell_WaitForCursorsWithTagBase
---

```csharp
public interface CPulseCell_WaitForCursorsWithTagBase : CPulseCell_BaseYieldingInflow, CPulseCell_BaseFlow, CPulseCell_Base, ISchemaClass<CPulseCell_Base>, ISchemaClass<CPulseCell_BaseFlow>, ISchemaClass<CPulseCell_BaseYieldingInflow>, ISchemaClass<CPulseCell_WaitForCursorsWithTagBase>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### CursorsAllowedToWait

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_WaitForCursorsWithTagBase.cs#L18)

```csharp
ref int CursorsAllowedToWait { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### WaitComplete

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_WaitForCursorsWithTagBase.cs#L20)

```csharp
CPulse_ResumePoint WaitComplete { get; }
```

#### Property Value

- [CPulse_ResumePoint](/docs/api/shared/schemadefinitions/cpulse_resumepoint)

