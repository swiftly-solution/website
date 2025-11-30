---
title: AggregateLODSetup_t
---

# Interface AggregateLODSetup_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AggregateLODSetup_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface AggregateLODSetup_t : ISchemaClass<AggregateLODSetup_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<AggregateLODSetup_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### LODOrigin

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AggregateLODSetup_t.cs#L18)

```csharp
ref Vector LODOrigin { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### MaxObjectScale

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AggregateLODSetup_t.cs#L20)

```csharp
ref float MaxObjectScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### SwitchDistances

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AggregateLODSetup_t.cs#L22)

```csharp
ref CUtlVector<float> SwitchDistances { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

