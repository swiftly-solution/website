---
title: CSolveIKChainUpdateNode
---

```csharp
public interface CSolveIKChainUpdateNode : CUnaryUpdateNode, CAnimUpdateNodeBase, ISchemaClass<CAnimUpdateNodeBase>, ISchemaClass<CUnaryUpdateNode>, ISchemaClass<CSolveIKChainUpdateNode>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **OpFixedData** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSolveIKChainUpdateNode.cs#L19)

```csharp
SolveIKChainPoseOpFixedSettings_t OpFixedData { get; }
```

- Property Value

- [SolveIKChainPoseOpFixedSettings_t](/docs/api/shared/schemadefinitions/solveikchainposeopfixedsettings_t)

### **TargetHandles** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSolveIKChainUpdateNode.cs#L17)

```csharp
ref CUtlVector TargetHandles { get; }
```

- Property Value

- [CUtlVector](/docs/api/)

