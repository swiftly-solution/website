---
title: CEnvLaser
---

```csharp
public interface CEnvLaser : CBeam, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBeam>, ISchemaClass<CEnvLaser>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### FirePosition

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvLaser.cs#L23)

```csharp
ref Vector FirePosition { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### LaserTarget

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvLaser.cs#L17)

```csharp
string LaserTarget { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Sprite

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvLaser.cs#L19)

```csharp
CSprite? Sprite { get; }
```

#### Property Value

- [CSprite](/docs/api/shared/schemadefinitions/csprite)?

### SpriteName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvLaser.cs#L21)

```csharp
string SpriteName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### StartFrame

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvLaser.cs#L25)

```csharp
ref float StartFrame { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

