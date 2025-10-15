---
title: AggregateLODSetup_t
---

```csharp
public interface AggregateLODSetup_t : ISchemaClass<AggregateLODSetup_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### LODOrigin

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AggregateLODSetup_t.cs#L17)

```csharp
ref Vector LODOrigin { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### MaxObjectScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AggregateLODSetup_t.cs#L19)

```csharp
ref float MaxObjectScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### SwitchDistances

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AggregateLODSetup_t.cs#L21)

```csharp
ref CUtlVector<float> SwitchDistances { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

