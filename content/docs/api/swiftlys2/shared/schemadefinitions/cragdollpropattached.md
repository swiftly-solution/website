---
title: CRagdollPropAttached
---

```csharp
public interface CRagdollPropAttached : CRagdollProp, CBaseAnimGraph, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseAnimGraph>, ISchemaClass<CRagdollProp>, ISchemaClass<CRagdollPropAttached>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**AttachmentPointBoneSpace** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollPropAttached.cs#L20)

```csharp
ref Vector AttachmentPointBoneSpace { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

**AttachmentPointRagdollSpace** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollPropAttached.cs#L22)

```csharp
ref Vector AttachmentPointRagdollSpace { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

**BoneIndexAttached** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollPropAttached.cs#L16)

```csharp
ref uint BoneIndexAttached { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**RagdollAttachedObjectIndex** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollPropAttached.cs#L18)

```csharp
ref uint RagdollAttachedObjectIndex { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**ShouldDeleteAttachedActivationRecord** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollPropAttached.cs#L26)

```csharp
ref bool ShouldDeleteAttachedActivationRecord { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**ShouldDetach** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollPropAttached.cs#L24)

```csharp
ref bool ShouldDetach { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

**AttachmentPointBoneSpaceUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollPropAttached.cs#L30)

```csharp
void AttachmentPointBoneSpaceUpdated()
```

**AttachmentPointRagdollSpaceUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollPropAttached.cs#L31)

```csharp
void AttachmentPointRagdollSpaceUpdated()
```

**BoneIndexAttachedUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollPropAttached.cs#L28)

```csharp
void BoneIndexAttachedUpdated()
```

**RagdollAttachedObjectIndexUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollPropAttached.cs#L29)

```csharp
void RagdollAttachedObjectIndexUpdated()
```

