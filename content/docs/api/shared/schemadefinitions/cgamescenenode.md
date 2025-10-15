---
title: CGameSceneNode
---

```csharp
public interface CGameSceneNode : ISchemaClass<CGameSceneNode>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AbsOrigin

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L35)

```csharp
ref Vector AbsOrigin { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### AbsRotation

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L37)

```csharp
ref QAngle AbsRotation { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

### AbsScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L39)

```csharp
ref float AbsScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### BoneMergeFlex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L68)

```csharp
SchemaUntypedField BoneMergeFlex { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### Child

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L23)

```csharp
CGameSceneNode? Child { get; }
```

#### Property Value

- [CGameSceneNode](/docs/api/shared/schemadefinitions/cgamescenenode)?

### ClientLocalScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L88)

```csharp
ref float ClientLocalScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DebugAbsOriginChanges

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L43)

```csharp
ref bool DebugAbsOriginChanges { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DirtyBoneMergeBoneToRoot

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L74)

```csharp
SchemaUntypedField DirtyBoneMergeBoneToRoot { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### DirtyBoneMergeInfo

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L53)

```csharp
SchemaUntypedField DirtyBoneMergeInfo { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### DirtyHierarchy

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L50)

```csharp
SchemaUntypedField DirtyHierarchy { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### DoNotSetAnimTimeInInvalidatePhysicsCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L80)

```csharp
ref byte DoNotSetAnimTimeInInvalidatePhysicsCount { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### Dormant

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L45)

```csharp
ref bool Dormant { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ForceParentToBeNetworked

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L47)

```csharp
ref bool ForceParentToBeNetworked { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HierarchicalDepth

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L76)

```csharp
ref byte HierarchicalDepth { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### HierarchyAttachName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L84)

```csharp
ref CUtlStringToken HierarchyAttachName { get; }
```

#### Property Value

- [CUtlStringToken](/docs/api/shared/natives/cutlstringtoken)

### HierarchyType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L78)

```csharp
ref byte HierarchyType { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### LatchAbsOrigin

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L71)

```csharp
SchemaUntypedField LatchAbsOrigin { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### Name

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L82)

```csharp
ref CUtlStringToken Name { get; }
```

#### Property Value

- [CUtlStringToken](/docs/api/shared/natives/cutlstringtoken)

### NetworkedAnglesChanged

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L59)

```csharp
SchemaUntypedField NetworkedAnglesChanged { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### NetworkedPositionChanged

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L56)

```csharp
SchemaUntypedField NetworkedPositionChanged { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### NetworkedScaleChanged

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L62)

```csharp
SchemaUntypedField NetworkedScaleChanged { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### NextSibling

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L25)

```csharp
CGameSceneNode? NextSibling { get; }
```

#### Property Value

- [CGameSceneNode](/docs/api/shared/schemadefinitions/cgamescenenode)?

### NodeToWorld

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L17)

```csharp
ref CTransform NodeToWorld { get; }
```

#### Property Value

- [CTransform](/docs/api/shared/natives/ctransform)

### Origin

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L29)

```csharp
CNetworkOriginCellCoordQuantizedVector Origin { get; }
```

#### Property Value

- [CNetworkOriginCellCoordQuantizedVector](/docs/api/shared/schemadefinitions/cnetworkorigincellcoordquantizedvector)

### Owner

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L19)

```csharp
CEntityInstance? Owner { get; }
```

#### Property Value

- [CEntityInstance](/docs/api/shared/schemadefinitions/centityinstance)?

### Parent

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L21)

```csharp
CGameSceneNode? Parent { get; }
```

#### Property Value

- [CGameSceneNode](/docs/api/shared/schemadefinitions/cgamescenenode)?

### Parent1

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L27)

```csharp
CGameSceneNodeHandle Parent1 { get; }
```

#### Property Value

- [CGameSceneNodeHandle](/docs/api/shared/schemadefinitions/cgamescenenodehandle)

### ParentAttachmentOrBone

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L41)

```csharp
ref short ParentAttachmentOrBone { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### RenderOrigin

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L90)

```csharp
ref Vector RenderOrigin { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### Rotation

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L31)

```csharp
ref QAngle Rotation { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

### Scale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L33)

```csharp
ref float Scale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### WillBeCallingPostDataUpdate

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L65)

```csharp
SchemaUntypedField WillBeCallingPostDataUpdate { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### ZOffset

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L86)

```csharp
ref float ZOffset { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

## Methods

### GetSkeletonInstance()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CGameSceneNode.cs#L8)

```csharp
CSkeletonInstance GetSkeletonInstance()
```

#### Returns

- [CSkeletonInstance](/docs/api/shared/schemadefinitions/cskeletoninstance)

### HierarchyAttachNameUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L97)

```csharp
void HierarchyAttachNameUpdated()
```

### NameUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L96)

```csharp
void NameUpdated()
```

### OriginUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L93)

```csharp
void OriginUpdated()
```

### Parent1Updated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L92)

```csharp
void Parent1Updated()
```

### RotationUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L94)

```csharp
void RotationUpdated()
```

### ScaleUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L95)

```csharp
void ScaleUpdated()
```

