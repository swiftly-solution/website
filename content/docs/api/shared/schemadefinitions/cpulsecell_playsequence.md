---
title: CPulseCell_PlaySequence
---

```csharp
public interface CPulseCell_PlaySequence : CPulseCell_BaseYieldingInflow, CPulseCell_BaseFlow, CPulseCell_Base, ISchemaClass<CPulseCell_Base>, ISchemaClass<CPulseCell_BaseFlow>, ISchemaClass<CPulseCell_BaseYieldingInflow>, ISchemaClass<CPulseCell_PlaySequence>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### OnCanceled

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_PlaySequence.cs#L24)

```csharp
CPulse_ResumePoint OnCanceled { get; }
```

#### Property Value

- [CPulse_ResumePoint](/docs/api/shared/schemadefinitions/cpulse_resumepoint)

### OnFinished

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_PlaySequence.cs#L22)

```csharp
CPulse_ResumePoint OnFinished { get; }
```

#### Property Value

- [CPulse_ResumePoint](/docs/api/shared/schemadefinitions/cpulse_resumepoint)

### PulseAnimEvents

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_PlaySequence.cs#L20)

```csharp
PulseNodeDynamicOutflows_t PulseAnimEvents { get; }
```

#### Property Value

- [PulseNodeDynamicOutflows_t](/docs/api/shared/schemadefinitions/pulsenodedynamicoutflows_t)

### SequenceName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_PlaySequence.cs#L18)

```csharp
string SequenceName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

