---
title: CPreMatchInfoData_TeamStats
---

```csharp
public interface CPreMatchInfoData_TeamStats : ITypedProtobuf<CPreMatchInfoData_TeamStats>, INativeHandle
```

#### Implements

## Properties

### MatchInfoIdxtxt

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CPreMatchInfoData_TeamStats.cs#L13)

```csharp
int MatchInfoIdxtxt { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MatchInfoTeams

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CPreMatchInfoData_TeamStats.cs#L19)

```csharp
IProtobufRepeatedFieldValueType<string> MatchInfoTeams { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/shared/netmessages/iprotobufrepeatedfieldvaluetype-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

### MatchInfoTxt

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CPreMatchInfoData_TeamStats.cs#L16)

```csharp
string MatchInfoTxt { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

