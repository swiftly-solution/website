---
title: CEntityFlame
---

```csharp
public interface CEntityFlame : CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CEntityFlame>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Attacker

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityFlame.cs#L31)

```csharp
ref CHandle<CBaseEntity> Attacker { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### CheapEffect

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityFlame.cs#L19)

```csharp
ref bool CheapEffect { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CustomDamageType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityFlame.cs#L35)

```csharp
ref int CustomDamageType { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DirectDamagePerSecond

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityFlame.cs#L33)

```csharp
ref float DirectDamagePerSecond { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### EntAttached

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityFlame.cs#L17)

```csharp
ref CHandle<CBaseEntity> EntAttached { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### HitboxFireScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityFlame.cs#L27)

```csharp
ref float HitboxFireScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Lifetime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityFlame.cs#L29)

```csharp
GameTime_t Lifetime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### NumHitboxFires

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityFlame.cs#L25)

```csharp
ref int NumHitboxFires { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Size

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityFlame.cs#L21)

```csharp
ref float Size { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### UseHitboxes

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityFlame.cs#L23)

```csharp
ref bool UseHitboxes { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### CheapEffectUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityFlame.cs#L38)

```csharp
void CheapEffectUpdated()
```

### EntAttachedUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEntityFlame.cs#L37)

```csharp
void EntAttachedUpdated()
```

