---
title: CDamageRecord
---

# Interface CDamageRecord

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CDamageRecord : ISchemaClass<CDamageRecord>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CDamageRecord>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ActualHealthRemoved

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L38)

```csharp
ref float ActualHealthRemoved { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### BulletsDamage

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L34)

```csharp
ref float BulletsDamage { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Damage

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L36)

```csharp
ref float Damage { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DamagerXuid

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L30)

```csharp
ref ulong DamagerXuid { get; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### IsOtherEnemy

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L44)

```csharp
ref bool IsOtherEnemy { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### KillType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L46)

```csharp
ref EKillTypes_t KillType { get; }
```

#### Property Value

- [EKillTypes_t](/docs/api/schemadefinitions/ekilltypes_t)

### LastBulletUpdate

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L42)

```csharp
ref int LastBulletUpdate { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NumHits

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L40)

```csharp
ref int NumHits { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PlayerControllerDamager

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L22)

```csharp
ref CHandle<CCSPlayerController> PlayerControllerDamager { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CCSPlayerController](/docs/api/schemadefinitions/ccsplayercontroller)>

### PlayerControllerRecipient

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L24)

```csharp
ref CHandle<CCSPlayerController> PlayerControllerRecipient { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CCSPlayerController](/docs/api/schemadefinitions/ccsplayercontroller)>

### PlayerDamager

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L18)

```csharp
ref CHandle<CCSPlayerPawn> PlayerDamager { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CCSPlayerPawn](/docs/api/schemadefinitions/ccsplayerpawn)>

### PlayerDamagerName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L26)

```csharp
string PlayerDamagerName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### PlayerRecipient

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L20)

```csharp
ref CHandle<CCSPlayerPawn> PlayerRecipient { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CCSPlayerPawn](/docs/api/schemadefinitions/ccsplayerpawn)>

### PlayerRecipientName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L28)

```csharp
string PlayerRecipientName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### RecipientXuid

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L32)

```csharp
ref ulong RecipientXuid { get; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

## Methods

### ActualHealthRemovedUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L57)

```csharp
void ActualHealthRemovedUpdated()
```

### DamageUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L56)

```csharp
void DamageUpdated()
```

### DamagerXuidUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L54)

```csharp
void DamagerXuidUpdated()
```

### IsOtherEnemyUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L60)

```csharp
void IsOtherEnemyUpdated()
```

### KillTypeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L61)

```csharp
void KillTypeUpdated()
```

### LastBulletUpdateUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L59)

```csharp
void LastBulletUpdateUpdated()
```

### NumHitsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L58)

```csharp
void NumHitsUpdated()
```

### PlayerControllerDamagerUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L50)

```csharp
void PlayerControllerDamagerUpdated()
```

### PlayerControllerRecipientUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L51)

```csharp
void PlayerControllerRecipientUpdated()
```

### PlayerDamagerNameUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L52)

```csharp
void PlayerDamagerNameUpdated()
```

### PlayerDamagerUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L48)

```csharp
void PlayerDamagerUpdated()
```

### PlayerRecipientNameUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L53)

```csharp
void PlayerRecipientNameUpdated()
```

### PlayerRecipientUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L49)

```csharp
void PlayerRecipientUpdated()
```

### RecipientXuidUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L55)

```csharp
void RecipientXuidUpdated()
```

