---
title: MLRoundState
---

```csharp
public interface MLRoundState : ITypedProtobuf<MLRoundState>, INativeHandle
```

#### Implements

## Properties

**BombState** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/MLRoundState.cs#L19)

```csharp
string BombState { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**Phase** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/MLRoundState.cs#L13)

```csharp
string Phase { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**WinTeam** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/MLRoundState.cs#L16)

```csharp
ETeam WinTeam { get; set; }
```

#### Property Value

- [ETeam](/docs/api/shared/protobufdefinitions/eteam)

