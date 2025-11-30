---
title: CRetakeGameRules
---

# Interface CRetakeGameRules

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRetakeGameRules.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CRetakeGameRules : ISchemaClass<CRetakeGameRules>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CRetakeGameRules>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BlockersPresent

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRetakeGameRules.cs#L20)

```csharp
ref bool BlockersPresent { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BombPlanter

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRetakeGameRules.cs#L28)

```csharp
ref CHandle<CCSPlayerPawn> BombPlanter { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CCSPlayerPawn](/docs/api/schemadefinitions/ccsplayerpawn)>

### BombSite

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRetakeGameRules.cs#L26)

```csharp
ref int BombSite { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### FirstSecondHalfRound

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRetakeGameRules.cs#L24)

```csharp
ref int FirstSecondHalfRound { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MatchSeed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRetakeGameRules.cs#L18)

```csharp
ref int MatchSeed { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RoundInProgress

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRetakeGameRules.cs#L22)

```csharp
ref bool RoundInProgress { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### BlockersPresentUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRetakeGameRules.cs#L31)

```csharp
void BlockersPresentUpdated()
```

### BombPlanterUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRetakeGameRules.cs#L35)

```csharp
void BombPlanterUpdated()
```

### BombSiteUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRetakeGameRules.cs#L34)

```csharp
void BombSiteUpdated()
```

### FirstSecondHalfRoundUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRetakeGameRules.cs#L33)

```csharp
void FirstSecondHalfRoundUpdated()
```

### MatchSeedUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRetakeGameRules.cs#L30)

```csharp
void MatchSeedUpdated()
```

### RoundInProgressUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRetakeGameRules.cs#L32)

```csharp
void RoundInProgressUpdated()
```

