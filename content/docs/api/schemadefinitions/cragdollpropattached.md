---
title: CRagdollPropAttached
---

# Interface CRagdollPropAttached

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollPropAttached.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CRagdollPropAttached : CRagdollProp, CBaseAnimGraph, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaClass<CRagdollProp>, ISchemaClass<CRagdollPropAttached>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CRagdollProp](/docs/api/schemadefinitions/cragdollprop)
- [CBaseAnimGraph](/docs/api/schemadefinitions/cbaseanimgraph)
- [CBaseModelEntity](/docs/api/schemadefinitions/cbasemodelentity)
- [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)
- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)
- [ISchemaClass<CEntityInstance>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseModelEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseAnimGraph>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CRagdollProp>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CRagdollPropAttached>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AttachmentPointBoneSpace

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollPropAttached.cs#L22)

```csharp
ref Vector AttachmentPointBoneSpace { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### AttachmentPointRagdollSpace

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollPropAttached.cs#L24)

```csharp
ref Vector AttachmentPointRagdollSpace { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### BoneIndexAttached

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollPropAttached.cs#L18)

```csharp
ref uint BoneIndexAttached { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### RagdollAttachedObjectIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollPropAttached.cs#L20)

```csharp
ref uint RagdollAttachedObjectIndex { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### ShouldDeleteAttachedActivationRecord

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollPropAttached.cs#L28)

```csharp
ref bool ShouldDeleteAttachedActivationRecord { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ShouldDetach

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollPropAttached.cs#L26)

```csharp
ref bool ShouldDetach { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### AttachmentPointBoneSpaceUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollPropAttached.cs#L32)

```csharp
void AttachmentPointBoneSpaceUpdated()
```

### AttachmentPointRagdollSpaceUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollPropAttached.cs#L33)

```csharp
void AttachmentPointRagdollSpaceUpdated()
```

### BoneIndexAttachedUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollPropAttached.cs#L30)

```csharp
void BoneIndexAttachedUpdated()
```

### RagdollAttachedObjectIndexUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollPropAttached.cs#L31)

```csharp
void RagdollAttachedObjectIndexUpdated()
```

