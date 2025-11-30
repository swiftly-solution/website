---
title: CMsgRecurringMissionSchema_MissionTemplateList
---

# Interface CMsgRecurringMissionSchema_MissionTemplateList

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgRecurringMissionSchema_MissionTemplateList.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMsgRecurringMissionSchema_MissionTemplateList : ITypedProtobuf<CMsgRecurringMissionSchema_MissionTemplateList>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CMsgRecurringMissionSchema_MissionTemplateList>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### MissionTemplates

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgRecurringMissionSchema_MissionTemplateList.cs#L16)

```csharp
IProtobufRepeatedFieldValueType<byte[]> MissionTemplates { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/netmessages/iprotobufrepeatedfieldvaluetypet)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)[]>

### Period

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgRecurringMissionSchema_MissionTemplateList.cs#L13)

```csharp
uint Period { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

