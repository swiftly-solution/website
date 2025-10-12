---
title: CFollowTargetUpdateNode
---

```csharp
public interface CFollowTargetUpdateNode : CUnaryUpdateNode, CAnimUpdateNodeBase, ISchemaClass<CAnimUpdateNodeBase>, ISchemaClass<CUnaryUpdateNode>, ISchemaClass<CFollowTargetUpdateNode>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **OpFixedData** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFollowTargetUpdateNode.cs#L16)

```csharp
FollowTargetOpFixedSettings_t OpFixedData { get; }
```

- Property Value

- [FollowTargetOpFixedSettings_t](/docs/api/shared/schemadefinitions/followtargetopfixedsettings_t)

### **ParameterOrientation** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFollowTargetUpdateNode.cs#L20)

```csharp
CAnimParamHandle ParameterOrientation { get; }
```

- Property Value

- [CAnimParamHandle](/docs/api/shared/schemadefinitions/canimparamhandle)

### **ParameterPosition** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFollowTargetUpdateNode.cs#L18)

```csharp
CAnimParamHandle ParameterPosition { get; }
```

- Property Value

- [CAnimParamHandle](/docs/api/shared/schemadefinitions/canimparamhandle)

