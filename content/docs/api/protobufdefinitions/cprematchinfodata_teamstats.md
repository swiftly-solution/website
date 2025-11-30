---
title: CPreMatchInfoData_TeamStats
---

# Interface CPreMatchInfoData_TeamStats

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CPreMatchInfoData_TeamStats.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CPreMatchInfoData_TeamStats : ITypedProtobuf<CPreMatchInfoData_TeamStats>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CPreMatchInfoData_TeamStats>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### MatchInfoIdxtxt

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CPreMatchInfoData_TeamStats.cs#L13)

```csharp
int MatchInfoIdxtxt { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MatchInfoTeams

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CPreMatchInfoData_TeamStats.cs#L19)

```csharp
IProtobufRepeatedFieldValueType<string> MatchInfoTeams { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/netmessages/iprotobufrepeatedfieldvaluetypet)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

### MatchInfoTxt

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CPreMatchInfoData_TeamStats.cs#L16)

```csharp
string MatchInfoTxt { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

