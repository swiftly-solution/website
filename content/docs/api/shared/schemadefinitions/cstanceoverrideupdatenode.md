---
title: CStanceOverrideUpdateNode
---

```csharp
public interface CStanceOverrideUpdateNode : CUnaryUpdateNode, CAnimUpdateNodeBase, ISchemaClass<CAnimUpdateNodeBase>, ISchemaClass<CUnaryUpdateNode>, ISchemaClass<CStanceOverrideUpdateNode>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### FootStanceInfo

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStanceOverrideUpdateNode.cs#L17)

```csharp
ref CUtlVector FootStanceInfo { get; }
```

#### Property Value

- [CUtlVector](/docs/api/)

### Mode

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStanceOverrideUpdateNode.cs#L23)

```csharp
ref StanceOverrideMode Mode { get; }
```

#### Property Value

- [StanceOverrideMode](/docs/api/shared/schemadefinitions/stanceoverridemode)

### Parameter

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStanceOverrideUpdateNode.cs#L21)

```csharp
CAnimParamHandle Parameter { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/shared/schemadefinitions/canimparamhandle)

### StanceSourceNode

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStanceOverrideUpdateNode.cs#L19)

```csharp
CAnimUpdateNodeRef StanceSourceNode { get; }
```

#### Property Value

- [CAnimUpdateNodeRef](/docs/api/shared/schemadefinitions/canimupdatenoderef)

