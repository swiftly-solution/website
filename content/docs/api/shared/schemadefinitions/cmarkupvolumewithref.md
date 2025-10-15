---
title: CMarkupVolumeWithRef
---

```csharp
public interface CMarkupVolumeWithRef : CMarkupVolumeTagged, CMarkupVolume, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CMarkupVolume>, ISchemaClass<CMarkupVolumeTagged>, ISchemaClass<CMarkupVolumeWithRef>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### RefDot

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMarkupVolumeWithRef.cs#L23)

```csharp
ref float RefDot { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### RefPosEntitySpace

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMarkupVolumeWithRef.cs#L19)

```csharp
ref Vector RefPosEntitySpace { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### RefPosWorldSpace

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMarkupVolumeWithRef.cs#L21)

```csharp
ref Vector RefPosWorldSpace { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### UseRef

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMarkupVolumeWithRef.cs#L17)

```csharp
ref bool UseRef { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

