---
title: CBaseIssue
---

```csharp
public interface CBaseIssue : ISchemaClass<CBaseIssue>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**DetailsString** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseIssue.cs#L18)

```csharp
string DetailsString { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**NumNoVotes** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseIssue.cs#L22)

```csharp
ref int NumNoVotes { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**NumPotentialVotes** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseIssue.cs#L24)

```csharp
ref int NumPotentialVotes { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**NumYesVotes** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseIssue.cs#L20)

```csharp
ref int NumYesVotes { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**TypeString** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseIssue.cs#L16)

```csharp
string TypeString { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**VoteController** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBaseIssue.cs#L26)

```csharp
CVoteController? VoteController { get; }
```

#### Property Value

- [CVoteController](/docs/api/shared/schemadefinitions/cvotecontroller)?

