---
title: CBlood
---

```csharp
public interface CBlood : CPointEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CPointEntity>, ISchemaClass<CBlood>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**Amount** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBlood.cs#L20)

```csharp
ref float Amount { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**Color** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBlood.cs#L22)

```csharp
ref BloodType Color { get; }
```

#### Property Value

- [BloodType](/docs/api/shared/schemadefinitions/bloodtype)

**SprayAngles** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBlood.cs#L16)

```csharp
ref QAngle SprayAngles { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

**SprayDir** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBlood.cs#L18)

```csharp
ref Vector SprayDir { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

