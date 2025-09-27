---
title: CEntityFlame
---

```csharp
public interface CEntityFlame : CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CEntityFlame>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**Attacker** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityFlame.cs#L30)

```csharp
ref CHandle<CBaseEntity> Attacker { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

**CheapEffect** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityFlame.cs#L18)

```csharp
ref bool CheapEffect { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**CustomDamageType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityFlame.cs#L34)

```csharp
ref int CustomDamageType { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**DirectDamagePerSecond** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityFlame.cs#L32)

```csharp
ref float DirectDamagePerSecond { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**EntAttached** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityFlame.cs#L16)

```csharp
ref CHandle<CBaseEntity> EntAttached { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

**HitboxFireScale** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityFlame.cs#L26)

```csharp
ref float HitboxFireScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**Lifetime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityFlame.cs#L28)

```csharp
GameTime_t Lifetime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

**NumHitboxFires** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityFlame.cs#L24)

```csharp
ref int NumHitboxFires { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**Size** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityFlame.cs#L20)

```csharp
ref float Size { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**UseHitboxes** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityFlame.cs#L22)

```csharp
ref bool UseHitboxes { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

**CheapEffectUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityFlame.cs#L37)

```csharp
void CheapEffectUpdated()
```

**EntAttachedUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityFlame.cs#L36)

```csharp
void EntAttachedUpdated()
```

