---
title: CVoteController
---

```csharp
public interface CVoteController : CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CVoteController>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **AcceptingVotesTimer** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoteController.cs#L26)

```csharp
CountdownTimer AcceptingVotesTimer { get; }
```

- Property Value

- [CountdownTimer](/docs/api/shared/schemadefinitions/countdowntimer)

### **ActiveIssueIndex** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoteController.cs#L16)

```csharp
ref int ActiveIssueIndex { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **ExecuteCommandTimer** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoteController.cs#L28)

```csharp
CountdownTimer ExecuteCommandTimer { get; }
```

- Property Value

- [CountdownTimer](/docs/api/shared/schemadefinitions/countdowntimer)

### **HighestCountIndex** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoteController.cs#L38)

```csharp
ref int HighestCountIndex { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **IsYesNoVote** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoteController.cs#L24)

```csharp
ref bool IsYesNoVote { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **OnlyTeamToVote** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoteController.cs#L18)

```csharp
ref int OnlyTeamToVote { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **PlayerHoldingVote** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoteController.cs#L34)

```csharp
ref uint PlayerHoldingVote { get; }
```

- Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **PlayerOverrideForVote** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoteController.cs#L36)

```csharp
ref uint PlayerOverrideForVote { get; }
```

- Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **PotentialIssues** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoteController.cs#L40)

```csharp
ref CUtlVector<PointerTo<CBaseIssue>> PotentialIssues { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[PointerTo](/docs/api/shared/natives/pointerto-1)<[CBaseIssue](/docs/api/shared/schemadefinitions/cbaseissue)>>

### **PotentialVotes** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoteController.cs#L22)

```csharp
ref int PotentialVotes { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **ResetVoteTimer** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoteController.cs#L30)

```csharp
CountdownTimer ResetVoteTimer { get; }
```

- Property Value

- [CountdownTimer](/docs/api/shared/schemadefinitions/countdowntimer)

### **VoteOptionCount** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoteController.cs#L20)

```csharp
ISchemaFixedArray<int> VoteOptionCount { get; }
```

- Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### **VoteOptions** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoteController.cs#L42)

```csharp
ref CUtlVector<CString> VoteOptions { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[CString](/docs/api/shared/natives/cstring)>

### **VotesCast** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoteController.cs#L32)

```csharp
ISchemaFixedArray<int> VotesCast { get; }
```

- Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

## Methods

### **ActiveIssueIndexUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoteController.cs#L44)

```csharp
void ActiveIssueIndexUpdated()
```

### **IsYesNoVoteUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoteController.cs#L48)

```csharp
void IsYesNoVoteUpdated()
```

### **OnlyTeamToVoteUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoteController.cs#L45)

```csharp
void OnlyTeamToVoteUpdated()
```

### **PotentialVotesUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoteController.cs#L47)

```csharp
void PotentialVotesUpdated()
```

### **VoteOptionCountUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoteController.cs#L46)

```csharp
void VoteOptionCountUpdated()
```

