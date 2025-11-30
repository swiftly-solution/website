---
title: CStanceOverrideUpdateNode
---

# Interface CStanceOverrideUpdateNode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStanceOverrideUpdateNode.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CStanceOverrideUpdateNode : CUnaryUpdateNode, CAnimUpdateNodeBase, ISchemaClass<CAnimUpdateNodeBase>, ISchemaClass<CUnaryUpdateNode>, ISchemaClass<CStanceOverrideUpdateNode>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CUnaryUpdateNode](/docs/api/schemadefinitions/cunaryupdatenode)
- [CAnimUpdateNodeBase](/docs/api/schemadefinitions/canimupdatenodebase)
- [ISchemaClass<CAnimUpdateNodeBase>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CUnaryUpdateNode>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CStanceOverrideUpdateNode>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### FootStanceInfo

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStanceOverrideUpdateNode.cs#L18)

```csharp
ref CUtlVector<StanceInfo_t> FootStanceInfo { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[StanceInfo_t](/docs/api/schemadefinitions/stanceinfo_t)>

### Mode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStanceOverrideUpdateNode.cs#L24)

```csharp
ref StanceOverrideMode Mode { get; }
```

#### Property Value

- [StanceOverrideMode](/docs/api/schemadefinitions/stanceoverridemode)

### Parameter

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStanceOverrideUpdateNode.cs#L22)

```csharp
CAnimParamHandle Parameter { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/schemadefinitions/canimparamhandle)

### StanceSourceNode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CStanceOverrideUpdateNode.cs#L20)

```csharp
CAnimUpdateNodeRef StanceSourceNode { get; }
```

#### Property Value

- [CAnimUpdateNodeRef](/docs/api/schemadefinitions/canimupdatenoderef)

