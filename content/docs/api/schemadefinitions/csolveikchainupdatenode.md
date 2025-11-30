---
title: CSolveIKChainUpdateNode
---

# Interface CSolveIKChainUpdateNode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSolveIKChainUpdateNode.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CSolveIKChainUpdateNode : CUnaryUpdateNode, CAnimUpdateNodeBase, ISchemaClass<CAnimUpdateNodeBase>, ISchemaClass<CUnaryUpdateNode>, ISchemaClass<CSolveIKChainUpdateNode>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CUnaryUpdateNode](/docs/api/schemadefinitions/cunaryupdatenode)
- [CAnimUpdateNodeBase](/docs/api/schemadefinitions/canimupdatenodebase)
- [ISchemaClass<CAnimUpdateNodeBase>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CUnaryUpdateNode>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CSolveIKChainUpdateNode>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### OpFixedData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSolveIKChainUpdateNode.cs#L20)

```csharp
SolveIKChainPoseOpFixedSettings_t OpFixedData { get; }
```

#### Property Value

- [SolveIKChainPoseOpFixedSettings_t](/docs/api/schemadefinitions/solveikchainposeopfixedsettings_t)

### TargetHandles

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSolveIKChainUpdateNode.cs#L18)

```csharp
ref CUtlVector<CSolveIKTargetHandle_t> TargetHandles { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CSolveIKTargetHandle_t](/docs/api/schemadefinitions/csolveiktargethandle_t)>

