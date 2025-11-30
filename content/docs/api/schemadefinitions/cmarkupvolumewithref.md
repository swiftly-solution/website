---
title: CMarkupVolumeWithRef
---

# Interface CMarkupVolumeWithRef

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMarkupVolumeWithRef.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMarkupVolumeWithRef : CMarkupVolumeTagged, CMarkupVolume, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CMarkupVolume>, ISchemaClass<CMarkupVolumeTagged>, ISchemaClass<CMarkupVolumeWithRef>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CMarkupVolumeTagged](/docs/api/schemadefinitions/cmarkupvolumetagged)
- [CMarkupVolume](/docs/api/schemadefinitions/cmarkupvolume)
- [CBaseModelEntity](/docs/api/schemadefinitions/cbasemodelentity)
- [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)
- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)
- [ISchemaClass<CEntityInstance>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseModelEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CMarkupVolume>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CMarkupVolumeTagged>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CMarkupVolumeWithRef>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### RefDot

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMarkupVolumeWithRef.cs#L24)

```csharp
ref float RefDot { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### RefPosEntitySpace

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMarkupVolumeWithRef.cs#L20)

```csharp
ref Vector RefPosEntitySpace { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### RefPosWorldSpace

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMarkupVolumeWithRef.cs#L22)

```csharp
ref Vector RefPosWorldSpace { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### UseRef

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMarkupVolumeWithRef.cs#L18)

```csharp
ref bool UseRef { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

