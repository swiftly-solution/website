---
title: CFootPinningUpdateNode
---

```csharp
public interface CFootPinningUpdateNode : CUnaryUpdateNode, CAnimUpdateNodeBase, ISchemaClass<CAnimUpdateNodeBase>, ISchemaClass<CUnaryUpdateNode>, ISchemaClass<CFootPinningUpdateNode>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Params

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootPinningUpdateNode.cs#L22)

```csharp
ref CUtlVector<CAnimParamHandle> Params { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CAnimParamHandle](/docs/api/shared/schemadefinitions/canimparamhandle)>

### PoseOpFixedData

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootPinningUpdateNode.cs#L18)

```csharp
FootPinningPoseOpFixedData_t PoseOpFixedData { get; }
```

#### Property Value

- [FootPinningPoseOpFixedData_t](/docs/api/shared/schemadefinitions/footpinningposeopfixeddata_t)

### ResetChild

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootPinningUpdateNode.cs#L24)

```csharp
ref bool ResetChild { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TimingSource

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootPinningUpdateNode.cs#L20)

```csharp
ref FootPinningTimingSource TimingSource { get; }
```

#### Property Value

- [FootPinningTimingSource](/docs/api/shared/schemadefinitions/footpinningtimingsource)

