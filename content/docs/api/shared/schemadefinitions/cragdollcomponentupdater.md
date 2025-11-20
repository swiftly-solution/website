---
title: CRagdollComponentUpdater
---

```csharp
public interface CRagdollComponentUpdater : CAnimComponentUpdater, ISchemaClass<CAnimComponentUpdater>, ISchemaClass<CRagdollComponentUpdater>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### BoneIndices

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollComponentUpdater.cs#L22)

```csharp
ref CUtlVector<int> BoneIndices { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### BoneNames

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollComponentUpdater.cs#L24)

```csharp
ref CUtlVector<CUtlString> BoneNames { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CUtlString](/docs/api/shared/natives/cutlstring)>

### BoneToWeightIndices

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollComponentUpdater.cs#L28)

```csharp
ref CUtlVector<int> BoneToWeightIndices { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### FollowAttachmentNodePaths

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollComponentUpdater.cs#L20)

```csharp
ref CUtlVector<CAnimNodePath> FollowAttachmentNodePaths { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CAnimNodePath](/docs/api/shared/schemadefinitions/canimnodepath)>

### MaxStretch

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollComponentUpdater.cs#L34)

```csharp
ref float MaxStretch { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### RagdollNodePaths

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollComponentUpdater.cs#L18)

```csharp
ref CUtlVector<CAnimNodePath> RagdollNodePaths { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CAnimNodePath](/docs/api/shared/schemadefinitions/canimnodepath)>

### SolidCollisionAtZeroWeight

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollComponentUpdater.cs#L36)

```csharp
ref bool SolidCollisionAtZeroWeight { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SpringFrequencyMax

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollComponentUpdater.cs#L32)

```csharp
ref float SpringFrequencyMax { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### SpringFrequencyMin

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollComponentUpdater.cs#L30)

```csharp
ref float SpringFrequencyMin { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### WeightLists

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollComponentUpdater.cs#L26)

```csharp
ref CUtlVector<WeightList> WeightLists { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[WeightList](/docs/api/shared/schemadefinitions/weightlist)>

