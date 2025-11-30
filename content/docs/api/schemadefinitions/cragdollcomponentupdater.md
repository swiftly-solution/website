---
title: CRagdollComponentUpdater
---

# Interface CRagdollComponentUpdater

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollComponentUpdater.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CRagdollComponentUpdater : CAnimComponentUpdater, ISchemaClass<CAnimComponentUpdater>, ISchemaClass<CRagdollComponentUpdater>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CAnimComponentUpdater](/docs/api/schemadefinitions/canimcomponentupdater)
- [ISchemaClass<CAnimComponentUpdater>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CRagdollComponentUpdater>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BoneIndices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollComponentUpdater.cs#L22)

```csharp
ref CUtlVector<int> BoneIndices { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### BoneNames

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollComponentUpdater.cs#L24)

```csharp
ref CUtlVector<CUtlString> BoneNames { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CUtlString](/docs/api/natives/cutlstring)>

### BoneToWeightIndices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollComponentUpdater.cs#L28)

```csharp
ref CUtlVector<int> BoneToWeightIndices { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### FollowAttachmentNodePaths

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollComponentUpdater.cs#L20)

```csharp
ref CUtlVector<CAnimNodePath> FollowAttachmentNodePaths { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CAnimNodePath](/docs/api/schemadefinitions/canimnodepath)>

### MaxStretch

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollComponentUpdater.cs#L34)

```csharp
ref float MaxStretch { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### RagdollNodePaths

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollComponentUpdater.cs#L18)

```csharp
ref CUtlVector<CAnimNodePath> RagdollNodePaths { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CAnimNodePath](/docs/api/schemadefinitions/canimnodepath)>

### SolidCollisionAtZeroWeight

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollComponentUpdater.cs#L36)

```csharp
ref bool SolidCollisionAtZeroWeight { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SpringFrequencyMax

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollComponentUpdater.cs#L32)

```csharp
ref float SpringFrequencyMax { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### SpringFrequencyMin

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollComponentUpdater.cs#L30)

```csharp
ref float SpringFrequencyMin { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### WeightLists

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollComponentUpdater.cs#L26)

```csharp
ref CUtlVector<WeightList> WeightLists { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[WeightList](/docs/api/schemadefinitions/weightlist)>

