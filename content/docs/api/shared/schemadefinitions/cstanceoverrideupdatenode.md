---
title: CStanceOverrideUpdateNode
---

```csharp
public interface CStanceOverrideUpdateNode : CUnaryUpdateNode, CAnimUpdateNodeBase, ISchemaClass<CAnimUpdateNodeBase>, ISchemaClass<CUnaryUpdateNode>, ISchemaClass<CStanceOverrideUpdateNode>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### FootStanceInfo

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStanceOverrideUpdateNode.cs#L18)

```csharp
ref CUtlVector<StanceInfo_t> FootStanceInfo { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[StanceInfo_t](/docs/api/shared/schemadefinitions/stanceinfo_t)>

### Mode

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStanceOverrideUpdateNode.cs#L24)

```csharp
ref StanceOverrideMode Mode { get; }
```

#### Property Value

- [StanceOverrideMode](/docs/api/shared/schemadefinitions/stanceoverridemode)

### Parameter

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStanceOverrideUpdateNode.cs#L22)

```csharp
CAnimParamHandle Parameter { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/shared/schemadefinitions/canimparamhandle)

### StanceSourceNode

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStanceOverrideUpdateNode.cs#L20)

```csharp
CAnimUpdateNodeRef StanceSourceNode { get; }
```

#### Property Value

- [CAnimUpdateNodeRef](/docs/api/shared/schemadefinitions/canimupdatenoderef)

