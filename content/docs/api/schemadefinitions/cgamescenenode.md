---
title: CGameSceneNode
---

# Interface CGameSceneNode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CGameSceneNode : ISchemaClass<CGameSceneNode>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CGameSceneNode>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AbsOrigin

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L36)

```csharp
ref Vector AbsOrigin { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### AbsRotation

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L38)

```csharp
ref QAngle AbsRotation { get; }
```

#### Property Value

- [QAngle](/docs/api/natives/qangle)

### AbsScale

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L40)

```csharp
ref float AbsScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### BoneMergeFlex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L69)

```csharp
SchemaUntypedField BoneMergeFlex { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### Child

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L24)

```csharp
CGameSceneNode? Child { get; }
```

#### Property Value

- [CGameSceneNode](/docs/api/schemadefinitions/cgamescenenode)?

### ClientLocalScale

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L89)

```csharp
ref float ClientLocalScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DebugAbsOriginChanges

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L44)

```csharp
ref bool DebugAbsOriginChanges { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DirtyBoneMergeBoneToRoot

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L75)

```csharp
SchemaUntypedField DirtyBoneMergeBoneToRoot { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### DirtyBoneMergeInfo

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L54)

```csharp
SchemaUntypedField DirtyBoneMergeInfo { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### DirtyHierarchy

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L51)

```csharp
SchemaUntypedField DirtyHierarchy { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### DoNotSetAnimTimeInInvalidatePhysicsCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L81)

```csharp
ref byte DoNotSetAnimTimeInInvalidatePhysicsCount { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### Dormant

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L46)

```csharp
ref bool Dormant { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ForceParentToBeNetworked

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L48)

```csharp
ref bool ForceParentToBeNetworked { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HierarchicalDepth

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L77)

```csharp
ref byte HierarchicalDepth { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### HierarchyAttachName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L85)

```csharp
ref CUtlStringToken HierarchyAttachName { get; }
```

#### Property Value

- [CUtlStringToken](/docs/api/natives/cutlstringtoken)

### HierarchyType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L79)

```csharp
ref byte HierarchyType { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### LatchAbsOrigin

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L72)

```csharp
SchemaUntypedField LatchAbsOrigin { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### Name

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L83)

```csharp
ref CUtlStringToken Name { get; }
```

#### Property Value

- [CUtlStringToken](/docs/api/natives/cutlstringtoken)

### NetworkedAnglesChanged

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L60)

```csharp
SchemaUntypedField NetworkedAnglesChanged { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### NetworkedPositionChanged

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L57)

```csharp
SchemaUntypedField NetworkedPositionChanged { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### NetworkedScaleChanged

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L63)

```csharp
SchemaUntypedField NetworkedScaleChanged { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### NextSibling

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L26)

```csharp
CGameSceneNode? NextSibling { get; }
```

#### Property Value

- [CGameSceneNode](/docs/api/schemadefinitions/cgamescenenode)?

### NodeToWorld

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L18)

```csharp
ref CTransform NodeToWorld { get; }
```

#### Property Value

- [CTransform](/docs/api/natives/ctransform)

### Origin

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L30)

```csharp
CNetworkOriginCellCoordQuantizedVector Origin { get; }
```

#### Property Value

- [CNetworkOriginCellCoordQuantizedVector](/docs/api/schemadefinitions/cnetworkorigincellcoordquantizedvector)

### Owner

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L20)

```csharp
CEntityInstance? Owner { get; }
```

#### Property Value

- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)?

### Parent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L22)

```csharp
CGameSceneNode? Parent { get; }
```

#### Property Value

- [CGameSceneNode](/docs/api/schemadefinitions/cgamescenenode)?

### Parent1

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L28)

```csharp
CGameSceneNodeHandle Parent1 { get; }
```

#### Property Value

- [CGameSceneNodeHandle](/docs/api/schemadefinitions/cgamescenenodehandle)

### ParentAttachmentOrBone

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L42)

```csharp
ref short ParentAttachmentOrBone { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### RenderOrigin

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L91)

```csharp
ref Vector RenderOrigin { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### Rotation

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L32)

```csharp
ref QAngle Rotation { get; }
```

#### Property Value

- [QAngle](/docs/api/natives/qangle)

### Scale

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L34)

```csharp
ref float Scale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### WillBeCallingPostDataUpdate

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L66)

```csharp
SchemaUntypedField WillBeCallingPostDataUpdate { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### ZOffset

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L87)

```csharp
ref float ZOffset { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

## Methods

### GetSkeletonInstance()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Core/Modules/Schemas/Extensions/CGameSceneNode.cs#L8)

Gets the Skeleton Instance from the node.

```csharp
CSkeletonInstance GetSkeletonInstance()
```

#### Returns

- [CSkeletonInstance](/docs/api/schemadefinitions/cskeletoninstance)

### HierarchyAttachNameUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L98)

```csharp
void HierarchyAttachNameUpdated()
```

### NameUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L97)

```csharp
void NameUpdated()
```

### OriginUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L94)

```csharp
void OriginUpdated()
```

### Parent1Updated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L93)

```csharp
void Parent1Updated()
```

### RotationUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L95)

```csharp
void RotationUpdated()
```

### ScaleUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameSceneNode.cs#L96)

```csharp
void ScaleUpdated()
```

