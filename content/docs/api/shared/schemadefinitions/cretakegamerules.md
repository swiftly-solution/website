---
title: CRetakeGameRules
---

```csharp
public interface CRetakeGameRules : ISchemaClass<CRetakeGameRules>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### BlockersPresent

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRetakeGameRules.cs#L19)

```csharp
ref bool BlockersPresent { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BombPlanter

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRetakeGameRules.cs#L27)

```csharp
ref CHandle<CCSPlayerPawn> BombPlanter { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CCSPlayerPawn](/docs/api/shared/schemadefinitions/ccsplayerpawn)>

### BombSite

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRetakeGameRules.cs#L25)

```csharp
ref int BombSite { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### FirstSecondHalfRound

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRetakeGameRules.cs#L23)

```csharp
ref int FirstSecondHalfRound { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MatchSeed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRetakeGameRules.cs#L17)

```csharp
ref int MatchSeed { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### RoundInProgress

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRetakeGameRules.cs#L21)

```csharp
ref bool RoundInProgress { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### BlockersPresentUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRetakeGameRules.cs#L30)

```csharp
void BlockersPresentUpdated()
```

### BombPlanterUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRetakeGameRules.cs#L34)

```csharp
void BombPlanterUpdated()
```

### BombSiteUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRetakeGameRules.cs#L33)

```csharp
void BombSiteUpdated()
```

### FirstSecondHalfRoundUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRetakeGameRules.cs#L32)

```csharp
void FirstSecondHalfRoundUpdated()
```

### MatchSeedUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRetakeGameRules.cs#L29)

```csharp
void MatchSeedUpdated()
```

### RoundInProgressUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRetakeGameRules.cs#L31)

```csharp
void RoundInProgressUpdated()
```

